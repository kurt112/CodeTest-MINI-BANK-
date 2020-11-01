package com.miniBank.miniBank.serviceImplementation;

import com.miniBank.miniBank.entity.Transaction;
import com.miniBank.miniBank.repository.TransactionRepository;
import com.miniBank.miniBank.service.Services;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Transactional
@Service

public class TransactionService_Impl implements Services<Transaction> {

    final private  TransactionRepository repo;

    @Autowired
    public TransactionService_Impl(TransactionRepository repo) {
        this.repo = repo;
    }

    @Override
    public List<Transaction> findAll() {
        return repo.findAll();
    }

    @Override
    public Transaction findById(int id) {
        Optional<Transaction> transaction = repo.findById(id);
        return transaction.orElse(null);
    }

    @Override
    public void save(Transaction transaction) {
        repo.save(transaction);
    }

    @Override
    public void deleteById(int id) {
        repo.deleteById(id);
    }

    @Override
    public void delete(Transaction transaction) {
        repo.delete(transaction);
    }
}
