package com.khooch.taskmanager.service;

import com.khooch.taskmanager.entity.Task;
import com.khooch.taskmanager.entity.User;
import com.khooch.taskmanager.repository.TaskRepository;
import com.khooch.taskmanager.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TaskService {

    @Autowired
    private TaskRepository taskRepository;

    @Autowired
    private UserRepository userRepository;

    public Task createTaskForUser(Long userId, Task task) {
        Optional<User> userOptional = userRepository.findById(userId);
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            task.setUser(user);
            return taskRepository.save(task);
        } else {
            throw new RuntimeException("User not found");
        }
    }

    public Task createTask(Task task) {
        return taskRepository.save(task);
    }

    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    public Optional<Task> getTaskById(Long id) {
        return taskRepository.findById(id);
    }

    public Task updateTask(Task task) {
        return taskRepository.save(task);
    }

    public void deleteTask(Long id) {
        taskRepository.deleteById(id);
    }

    public List<Task> searchTasksByTitle(String title) {
        return taskRepository.findByTitleContaining(title);
    }

    public List<Task> searchTasksByCategory(String category) {
        return taskRepository.findByCategoryContaining(category);
    }

    public List<Task> searchTasksByPriority(String priority) {
        return taskRepository.findByPriorityContaining(priority);
    }

    public List<Task> getTasksByUserId(Long userId) {
        return taskRepository.findByUserId(userId);
    }
}
