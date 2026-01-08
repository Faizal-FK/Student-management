package faisal.student_management.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import faisal.student_management.entity.Student;

public interface StudentRepository extends JpaRepository<Student, Long> {
}
// Repository = CRUD ka engine