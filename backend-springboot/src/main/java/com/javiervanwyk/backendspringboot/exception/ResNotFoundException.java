package com.javiervanwyk.backendspringboot.exception;

//basic exception when resource not found

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResNotFoundException extends RuntimeException{
        public static final long serialVersionUID = 1L;
        public ResNotFoundException(String mes){
            super(mes);
        }
}
