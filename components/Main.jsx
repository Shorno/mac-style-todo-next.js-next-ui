"use client"
import Heading from "@/components/Heading";
import Sidebar from "@/components/Sidebar";
import {Card} from "@nextui-org/react";
import {useState} from "react";
import TodoList from "@/components/TodoList";
import {initialItems} from "@/lib/constants";


export default function Main() {
    const [items, setItems] = useState(initialItems)

    const handleAddTodo = (newTodoText) => {
        const newItem = {
            id: new Date().getTime(),
            name: newTodoText,
            completed: false
        }
        const newItems = [...items, newItem];
        setItems(newItems)
    }

    const handleMarkAllAsComplete = () => {
        const newItems = items.map((item) => {
            return {...item, completed: true}
        })
        console.log(newItems)
        setItems(newItems)
    }
    const handleMarkAllAsIncomplete = ()=>{
        const newItems = items.map((item)=>{
            return {...item, completed: false}
        })
        setItems(newItems)
    }
    const handleResetToInitial = ()=>{
        setItems(initialItems)
    }
    const deleteAllItems = ()=>{
        setItems([])
    }


    return (
        <>
            <Card className={"w-1/2 mx-auto"}>
                <div className={"grid grid-cols-3"}>
                    <div className={"bg-[#F7F9F2] col-span-3 rounded-t-xl h-10"}>
                        <Heading/>
                    </div>
                    <div className={"bg-[#7776B3] col-span-2 h-96"}>
                        <TodoList items={items}/>
                    </div>
                    <div className={"bg-[#E2BBE9] h-96"}>
                        <Sidebar
                            handleAddTodo={handleAddTodo}
                            handleMarkAllAsComplete={handleMarkAllAsComplete}
                            handleMarkAllAsIncomplete={handleMarkAllAsIncomplete}
                            handleResetToInitial={handleResetToInitial}
                            deleteAllItems={deleteAllItems}
                        />
                    </div>
                </div>
            </Card>
        </>
    )
}