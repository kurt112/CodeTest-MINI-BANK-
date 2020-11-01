package com.miniBank.miniBank.serviceImplementation;

import com.miniBank.miniBank.entity.User;
import com.miniBank.miniBank.service.Services;
import com.miniBank.miniBank.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;
import java.util.List;

@Transactional
@Service
public class UserService_Impl implements Services<User> {


    final private UserRepository repo;

    @Autowired
    public UserService_Impl(UserRepository repo) {

        this.repo = repo;
    }

    @Override
    public List<User> findAll() {
        return repo.findAll();
    }

    @Override
    public User findById(int id) {
        Optional<User> result = repo.findById(id);
        return result.orElse(null);
    }

    @Override
    public void save(User user) {
        repo.save(user);
    }

    @Override
    public void deleteById(int id) {
        repo.deleteById(id);
    }

    @Override
    public void delete(User user) {
        repo.delete(user);
    }
}
