import sys
import os

sys.path.insert(0, os.path.dirname(__file__))

from models import TaskManager
from storage import load_tasks, save_tasks

DATA_FILE = os.path.join(os.path.dirname(__file__), "data.json")


def show_menu() -> None:
    print("\n=== Task Manager ===")
    print("1. Show tasks")
    print("2. Add task")
    print("3. Complete task")
    print("4. Delete task")
    print("5. Exit")


def show_tasks(manager: TaskManager) -> None:
    tasks = manager.list_tasks()
    if not tasks:
        print("No tasks yet. Add one!")
        return
    print("\nYour tasks:")
    for task in tasks:
        print(task)


def add_task(manager: TaskManager) -> None:
    title = input("Enter task title: ").strip()
    if not title:
        print("Error: task title cannot be empty.")
        return
    task = manager.add_task(title)
    save_tasks(DATA_FILE, manager.tasks)
    print(f"Task added: {task}")


def complete_task(manager: TaskManager) -> None:
    try:
        task_id = int(input("Enter task ID to complete: "))
    except ValueError:
        print("Error: please enter a valid number.")
        return

    if manager.complete_task(task_id):
        save_tasks(DATA_FILE, manager.tasks)
        print("Task completed!")
    else:
        print(f"Error: task with ID {task_id} not found.")


def delete_task(manager: TaskManager) -> None:
    try:
        task_id = int(input("Enter task ID to delete: "))
    except ValueError:
        print("Error: please enter a valid number.")
        return

    if manager.delete_task(task_id):
        save_tasks(DATA_FILE, manager.tasks)
        print("Task deleted.")
    else:
        print(f"Error: task with ID {task_id} not found.")


def main() -> None:
    tasks = load_tasks(DATA_FILE)
    manager = TaskManager(tasks)

    actions = {
        "1": show_tasks,
        "2": add_task,
        "3": complete_task,
        "4": delete_task,
    }

    while True:
        show_menu()
        choice = input("Choose an option: ").strip()

        if choice == "5":
            print("Goodbye!")
            break
        elif choice in actions:
            actions[choice](manager)
        else:
            print("Error: please choose a number between 1 and 5.")


if __name__ == "__main__":
    main()
