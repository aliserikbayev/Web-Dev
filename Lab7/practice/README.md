# Task Manager CLI

A command-line task manager built with Python, demonstrating OOP, file I/O, and modular design.

## Project Structure

```
task_manager/
    models.py   — Task and TaskManager classes
    storage.py  — JSON load/save functions
    main.py     — CLI menu and entry point
    data.json   — Persistent task storage
    README.md   — This file
```

## How to Run

```bash
cd lab7/practice/task_manager
python main.py
```

## Features

- Add tasks with a title
- List all tasks with ✅ / ❌ status
- Mark a task as completed by ID
- Delete a task by ID
- Data persists between runs via `data.json`

## Menu

```
1. Show tasks
2. Add task
3. Complete task
4. Delete task
5. Exit
```

## Concepts Used

- **OOP** — `Task` and `TaskManager` classes with full method implementations
- **File handling** — JSON read/write via the `json` module
- **Error handling** — `try/except` for invalid input; missing file gracefully handled
- **Modular design** — logic, storage, and interface are separated into distinct modules
- **PEP 8** — consistent naming, docstrings, and formatting throughout
