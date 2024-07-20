package com.khooch.taskmanager.repository;

import com.khooch.taskmanager.entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {
    List<Task> findByTitleContaining(String title);
    List<Task> findByCategoryContaining(String category);
    List<Task> findByPriorityContaining(String priority);
    List<Task> findByUserId(Long userId);
}
