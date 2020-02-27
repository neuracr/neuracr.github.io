---
layout: default
title: "Chosen plaintext attack"
categories: project
tags: crypto CPA 
---
# Chosen plaintext attack model

Attack model for crypto schemes.  
The attacker A has access to an encryption oracle.  

## Security game

Let (keygen, Enc, Dec) an encryption scheme.  

Challenger C, Adversary A

```raw
                     C                A
- Setup              |                |
                     |                |
                     |                |
- Oracle lookup      |<------m_i------|
phase                |---Enc(k,m_i)-->|
                     |                |
                     |                |
- Challenge          |<---(m_0,m_1)---|
phase                |                |
  C picks b in {0,1} |---Enc(k,m_b)-->|
  randomly.          |                |
  A makes a guess b' |                |
  on the value of b. |<-------b'------|
```

The encryption scheme is **computationaly CPA secure** if the attacker can guess the value of b with a probability non-negligibly better than 1/2.
