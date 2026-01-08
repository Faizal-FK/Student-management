package faisal.student_management.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import faisal.student_management.entity.Student;
import faisal.student_management.service.StudentService;

@RestController
@RequestMapping("/api/students")
@CrossOrigin("*")
public class StudentController {

    @Autowired
    private StudentService service;

    // ADD student
    @PostMapping
    public Student addStudent(@RequestBody Student student) {
        return service.saveStudent(student);
    }

    // GET all students
    @GetMapping
    public List<Student> getAllStudents() {
        return service.getAllStudents();
    }

    // DELETE student
    @DeleteMapping("/{id}")
    public void deleteStudent(@PathVariable Long id) {
        service.deleteStudent(id);
    }
}
// Controller = Gate / Entry point