from password_generator import generate, savePassword


print("Password Generator")



try:
    lenght = int(input("Enter the length of the password: "))
    choice = input("Enter the strength of the password (strong, medium, weak): ")
    print(choice)
    password = generate(lenght, choice)
    print(password)
    savePassword(password)
    print("Password saved to passwords.txt") 
except:
    print("Please enter a valid number for the length of the password.")