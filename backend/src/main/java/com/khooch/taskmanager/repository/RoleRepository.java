package com.khooch.taskmanager.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.khooch.taskmanager.entity.Role;

public interface RoleRepository extends JpaRepository<Role, Long> {
}
