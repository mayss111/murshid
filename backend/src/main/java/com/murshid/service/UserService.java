package com.murshid.service;

import com.murshid.entity.User;
import com.murshid.exception.ResourceNotFoundException;
import com.murshid.repository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User getById(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("لم يتم العثور على المستخدم بالمعرّف: " + id));
    }

    public User getByEmail(String email) {
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new ResourceNotFoundException("لم يتم العثور على المستخدم بالبريد الإلكتروني: " + email));
    }

    public User updateUser(Long id, User updateDetails) {
        User user = getById(id);
        if (updateDetails.getFirstName() != null) user.setFirstName(updateDetails.getFirstName());
        if (updateDetails.getLastName() != null) user.setLastName(updateDetails.getLastName());
        if (updateDetails.getNiveauActuel() != null) user.setNiveauActuel(updateDetails.getNiveauActuel());
        if (updateDetails.getDialecte() != null) user.setDialecte(updateDetails.getDialecte());
        return userRepository.save(user);
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
}
