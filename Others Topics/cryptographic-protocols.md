
## What is encryption?

Encryption is the process of converting plaintext data into an unreadable format called ciphertext, using an algorithm and an encryption key. This ensures that only authorized parties who possess the decryption key can convert the ciphertext back into plaintext and read the original information. 

Encryption is essentially a code used to hide the contents of a message or data.

#### There are two main types of encryption:

**Symmetric Encryption**

It involves a single key to both encrypt and decrypt the data. This key must be kept secret and shared securely between the communicating parties.

##### Common Symmetric Encryption Algorithms:

- **AES (Advanced Encryption Standard):** Widely used for securing data, supports key sizes of 128, 192, and 256 bits.

- **DES (Data Encryption Standard):** Older algorithm, now considered insecure due to its 56-bit key length.

- **3DES (Triple DES):** An enhancement of DES that applies the DES algorithm three times with different keys to increase security.

- **Blowfish:** Known for its speed and effectiveness, supports key lengths from 32 to 448 bits.

- **RC4:** A stream cipher that is simple and fast but has known vulnerabilities.

<br>

**Public-key encryption**

Public-key encryption is also known as asymmetric encryption because it requires one key for encrypting data and another for decrypting it. If you need to securely exchange information with someone you haven’t previously had an opportunity to exchange keys with, public-key encryption algorithms like RSA give you a way to do it.

##### Common Asymmetric Encryption Algorithms:

- **RSA (Rivest-Shamir-Adleman):** One of the most widely used algorithms, based on the computational difficulty of factoring large prime numbers.

- **ECC (Elliptic Curve Cryptography):** Provides similar security to RSA with smaller key sizes, making it faster and more efficient.

- **DSA (Digital Signature Algorithm):** Primarily used for digital signatures rather than encryption.

<br>

**Hybrid Encryption**

Many practical encryption systems use a combination of symmetric and asymmetric encryption, known as hybrid encryption. This approach leverages the strengths of both types:

- Asymmetric encryption is used to securely exchange a symmetric key.
- Symmetric encryption is used to encrypt the actual data, ensuring efficiency and speed.

<br>

### Major encryption algorithms

3DES, AES and RSA are the most common algorithms in use today,

#### 3DES encryption 

The Triple Data Encryption Algorithm (TDEA), more commonly known as the Triple Data Encryption Standard (3DES) is a symmetric key algorithm that gets its name because data passes through the original DES algorithm three times during the encryption process.

3DES is still used in finance, some Microsoft offerings, and a variety of other systems, but it looks like it is set to be retired in the near future. This is because 3DES is quite slow and isn’t considered safe compared to other algorithms.

#### AES encryption

The Advanced Encryption Standard (AES) was developed to replace the DES algorithm as technological advances began to make DES more insecure.

AES features three different key sizes, 128-bit, 192-bit and 256-bit. The key size determines whether there will be 10, 12 or 14 rounds of the encryption steps. The process starts with key expansion, which is where the initial key is used to create new keys that will be used in each round. Then the first round key is added to begin encrypting the data.

The AES algorithm is used to secure a vast amount of our data both at rest and in transit. Some of its more common applications can include:

WinZip, Signal, WhatsApp, TLS, SSH etc.

#### RSA encryption

RSA was the first asymmetric encryption algorithm widely available to the public. The algorithm relies on the difficulty of factoring primes, which allows its users to securely share data without having to distribute a key beforehand, or have access to a secure channel.

RSA is slow and uses a lot of computational resources, so it is generally only used to encrypt symmetric keys, which are much more efficient.


