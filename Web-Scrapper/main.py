import requests
from bs4 import BeautifulSoup
url = "https://books.toscrape.com/"
response = requests.get(url)

soup = BeautifulSoup(response.content,  "html.parser")
firstBook = soup.find("article")
# print(firsBook.prettify())

# print(response.status_code)
# print(response.text[:1000])

title = firstBook.h3.a["title"]

#price = firstBook.find("p", _class= "price_color").text

print(f"Title: {title}")
#print(f"Price: {price}")