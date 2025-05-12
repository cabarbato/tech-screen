package com.example.shoppingcart.service;

import com.example.shoppingcart.model.CartItem;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CartService {
  private final List<CartItem> cartItems = new ArrayList<>();

  public void addItem(CartItem item) {
    throw new UnsupportedOperationException("This method is not implemented yet");
  }

  public void removeItem(Long itemId) {
    throw new UnsupportedOperationException("This method is not implemented yet");
  }

  public List<CartItem> getCartItems() {
    throw new UnsupportedOperationException("This method is not implemented yet");
  }
}