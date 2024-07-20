package com.khooch.taskmanager.controller;

import com.khooch.taskmanager.dto.UserRegistrationDto;
import com.khooch.taskmanager.entity.Task;
import com.khooch.taskmanager.service.TaskService;
import com.khooch.taskmanager.service.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserRestController {

    @Autowired
    private UserService userService;

    @Autowired
    private TaskService taskService;

    @PostMapping("/registration")
    public ResponseEntity<String> registerUserAccount(@RequestBody @Valid UserRegistrationDto registrationDto) {
        userService.save(registrationDto);
        return ResponseEntity.status(HttpStatus.CREATED).body("User registered successfully");
    }

    @GetMapping("/{userId}/tasks")
    public ResponseEntity<List<Task>> viewTasks(@PathVariable Long userId) {
        List<Task> tasks = taskService.getTasksByUserId(userId);
        return ResponseEntity.ok(tasks);
    }

    @PostMapping("/{userId}/tasks")
    public ResponseEntity<Task> createTask(@PathVariable Long userId, @RequestBody @Valid Task task) {
        Task createdTask = taskService.createTaskForUser(userId, task);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdTask);
    }

    @GetMapping("/tasks/{taskId}")
    public ResponseEntity<Task> getTaskById(@PathVariable Long taskId) {
        return taskService.getTaskById(taskId)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

    @PutMapping("/tasks/{taskId}")
    public ResponseEntity<Task> updateTask(@PathVariable Long taskId, @RequestBody @Valid Task task) {
        task.setId(taskId);
        Task updatedTask = taskService.updateTask(task);
        return ResponseEntity.ok(updatedTask);
    }

    @DeleteMapping("/tasks/{taskId}")
    public ResponseEntity<Void> deleteTask(@PathVariable Long taskId) {
        taskService.deleteTask(taskId);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/tasks/search")
    public ResponseEntity<List<Task>> searchTasks(
            @RequestParam(required = false) String title,
            @RequestParam(required = false) String category,
            @RequestParam(required = false) String priority) {
        List<Task> tasks;
        if (title != null) {
            tasks = taskService.searchTasksByTitle(title);
        } else if (category != null) {
            tasks = taskService.searchTasksByCategory(category);
        } else if (priority != null) {
            tasks = taskService.searchTasksByPriority(priority);
        } else {
            tasks = taskService.getAllTasks();
        }
        return ResponseEntity.ok(tasks);
    }
}
