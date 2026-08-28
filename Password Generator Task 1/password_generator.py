import random
import secrets
import string
import datetime



def generate(length , choice):
    if length < 1:
        return "Invalid password length. Please enter a positive integer."
    if choice not in ["strong", "medium", "weak"]:
        return "Invalid password strength choice. Please choose 'strong', 'medium', or 'weak'."
    password = ''
    Lcharacters = string.ascii_lowercase
    Ucharacters = string.ascii_uppercase
    Ncharacters = string.digits
    Scharacters = string.punctuation

    if choice == "strong":
        characters = Lcharacters + Ucharacters + Ncharacters + Scharacters
    elif choice == "medium":
        characters = Lcharacters + Ucharacters + Ncharacters
    elif choice == "weak":
        characters = Lcharacters + Ucharacters
    

    for i in range(length):
        password+= secrets.choice(characters)

    return password

def savePassword(password):
    with open("passwords.txt", "a") as file:
        file.write(f"{datetime.datetime.now()}: {password}\n")
        print("Password saved to passwords.txt") 


