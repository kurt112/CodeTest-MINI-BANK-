package com.miniBank.miniBank.security;

//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

import javax.sql.DataSource;

public class SecurityConfiguration {//extends WebSecurityConfigurerAdapter {
//
//    @Autowired
//    private  DataSource dataSource;
//
//    @Override
//    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
//
////        auth.jdbcAuthentication().dataSource(dataSource)
////                .passwordEncoder(new BCryptPasswordEncoder());
//        //	.usersByUsernameQuery("")
//        //.authoritiesByUsernameQuery("");
//
//    }
//
//    @Override
//    protected void configure(HttpSecurity http) throws Exception {
//        http.httpBasic().disable();
////        http.authorizeRequests().anyRequest().anonymous();
//
//    }
}
