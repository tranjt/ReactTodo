var expect = require("expect");

var TodoAPI = require("TodoAPI");

describe("TodoAPI", ()=>{
    beforeEach(()=>{
        localStorage.removeItem("todos");
    });

    it("should exist", ()=>{
        expect(TodoAPI).toExist();
    });    

    describe("filterTodos", ()=>{
        var todos = [
        {
            id: 1,
            text: "Some text here",
            completed: true
        },
         {
            id: 2,
            text: "Other text here",
            completed: false
        },
         {
            id: 3,
            text: "Some text here",
            completed: true
        }
        ];

        it("should return all item if showCompleted is true", ()=> {
            var filteredTodo = TodoAPI.filterTodos(todos, true, "");
            expect(filteredTodo.length).toBe(3);
        });

        it("should return non-completed todos if showCompleted is false", ()=> {
            var filteredTodo = TodoAPI.filterTodos(todos, false, "");
            expect(filteredTodo.length).toBe(1);
        });

        it("should sort by completed status", ()=> {
            var filteredTodo = TodoAPI.filterTodos(todos, true, "");
            expect(filteredTodo[0].completed).toBe(false);
        });

        it("should all todos if searchText is empty", ()=> {
            var filteredTodo = TodoAPI.filterTodos(todos, true, "");
            expect(filteredTodo.length).toBe(3);
        });

        it("should return only todos with matching text to search", ()=> {
            var filteredTodo = TodoAPI.filterTodos(todos, true, "some");
            expect(filteredTodo.length).toBe(2);            
        });

    });
});