package com.khooch.taskmanager.repository;

import com.khooch.taskmanager.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    // Add additional query methods if needed
}
