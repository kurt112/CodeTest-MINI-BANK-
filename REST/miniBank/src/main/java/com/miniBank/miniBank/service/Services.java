package com.miniBank.miniBank.service;

import java.util.List;

public interface Services <T>{
     List<T> findAll();

     T findById(int id);

     void save(T t);

     void deleteById(int id);

     void delete(T t);
}
