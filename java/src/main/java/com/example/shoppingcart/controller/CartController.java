package com.example.shoppingcart.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.shoppingcart.model.CartItem;
import com.example.shoppingcart.service.CartService;

import java.util.List;

@RestController
@RequestMapping("/api/cart")
public class CartController {

  @Autowired
  private CartService cartService;

  @PostMapping("/add")
  public ResponseEntity<CartItem> addItem(@RequestBody CartItem cartItem) {
    throw new UnsupportedOperationException("This method is not implemented yet");

  }

  @DeleteMapping("/remove/{id}")
  public ResponseEntity<Void> removeItem(@PathVariable Long id) {
    throw new UnsupportedOperationException("This method is not implemented yet");
  }

  @GetMapping("/items")
  public ResponseEntity<List<CartItem>> getCartItems() {
    throw new UnsupportedOperationException("This method is not implemented yet");
  }
}
