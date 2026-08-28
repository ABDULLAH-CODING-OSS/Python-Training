from password_generator import generate, savePassword


print("Password Generator")



try:
    length = int(input("Enter the length of the password: "))
    choice = input("Enter the strength of the password (strong, medium, weak): ").lower()
    print(choice)
    password = generate(length, choice)
    print(password)
    if "Invalid" not in password:
        savePassword(password)
    

except ValueError:
    print("Please enter a valid number for the length of the password.")