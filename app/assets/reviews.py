import requests
from bs4 import BeautifulSoup

url = "https://www.weblancer.net/users/vadim_losenkov/reviews/?account_type=freelancer"

req = requests.get(url)
src = req.text

with open("reviews.html", "w") as file:
    file.write(src)