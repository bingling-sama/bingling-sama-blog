import requests
from selenium import webdriver

driver = webdriver.PhantomJS()
url = "https://pigjpg.com/#/"
x = 0
for i in range(1, 101):
    driver.get(url + str(i))
    res = driver.find_elements_by_class_name("pic-link")
    for y in res:
        img = str(y.find_element_by_tag_name("img").get_attribute("src"))
        img = img.replace("?x-oss-process=image/resize,w_250", "")
        open("./img/" + str(x) + ".jpeg", "wb").write(requests.get(img, stream=True).content)
        x += 1
        print('NO.' + str(x) + img + '  downloaded')
