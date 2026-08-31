import csv
from urllib.parse import urljoin

import requests

from bs4 import BeautifulSoup

base_url = "https://books.toscrape.com/" 
url = base_url
all_books=[]

csv_filename = "books.csv"
session = requests.Session()
book_count =0
headers = {"User-Agent": "Mozilla/5.0 (compatible; MyScraperBot/1.0)"}


try:
    with open(csv_filename, mode="w", newline="", encoding="utf-8") as file:
        fieldnames = ["title", "price", "rating"]
        writer = csv.DictWriter(file, fieldnames=fieldnames)
        writer.writeheader()

        while url:
            print(f"Scraping page: {url}")
            session.headers.update({"User-Agent": "Mozilla/5.0 (compatible; MyScraperBot/1.0)"})
            response = session.get(url, timeout=10, headers=headers)
            response.raise_for_status()
            soup = BeautifulSoup(response.content, "html.parser")
            books = soup.find_all("article", class_="product_pod")

            for book in books:
                title = book.h3.a["title"]
                price = book.find("p", class_="price_color").text
                rating_tag= book.find("p", class_="star-rating")
                rating = rating_tag["class"][1] if rating_tag and len(rating_tag["class"])>1 else "Unknown"
                print(f"Title: {title}, Price: {price}, Rating: {rating}")
                book_data = {"title": title, "price": price, "rating": rating}
                all_books.append(book_data)
                writer.writerow(book_data)
                book_count += 1
                print(f"Book count: {book_count}")

            next_button = soup.find("li", class_="next")
            if next_button:
                next_page = next_button.a["href"]
                print(f"Next page found: {next_page}")
                url = urljoin(url, next_page)
            else:
                url = None

    print("Successfully saved all books to CSV file.")
except requests.exceptions.RequestException as e:
    print(f"An error occurred while making the request: {e}")
print(len(all_books))









