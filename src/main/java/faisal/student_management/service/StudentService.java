package faisal.student_management.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import faisal.student_management.entity.Student;
import faisal.student_management.repository.StudentRepository;

@Service
public class StudentService {

    @Autowired
    private StudentRepository repository;

    // ADD / UPDATE
    public Student saveStudent(Student student) {
        return repository.save(student);
    }

    // GET ALL
    public List<Student> getAllStudents() {
        return repository.findAll();
    }

    // DELETE
    public void deleteStudent(Long id) {
        repository.deleteById(id);
    }
}
// Service = rules + logic ka center