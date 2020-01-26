# Text Analysis on Supreme Court Cases
Team Supreme - Paul Dean, Soo Bin Hwang and Seung Hwa Jun

## Overview
This web app collects court cases from Supreme Court of Canada to build a tool that search through texts that contain a specific keyword and return cases considered highly relevant based on TF/IDF scores of the search term. The following steps were taken to build the app:

1. Collect Data
* Scrape the text, URLs, and supplemental data (case name etc) on 100 criminal and 100 court cases from the Supreme Court website. This is publicly available information.
* Tools used: requests.get, BeautifulSoup, JSON

2. Calculate TF/IDF scores
* Perform TF/IDF analysis on the text of the court cases. This indicates what most relevant terms and topics are for each case. Create a website which allows users to search for cases that are relevant to their search terms (e.g. cases related to share redemptions).
* Tools used: pySpark

3. Naïve Bayes analysis
* Use a Naïve Bayes model to predict whether court cases are related to criminal law or tax law. I.e., Pass the text from 70% of the cases as training data, and then use the text from the remaining 30% of cases as test data to predict whether the model can tell if the case is tax law-related or criminal law-related.
* Tools used: pySpark and TensorFlow

4. Word Clouds
* Create word clouds to visualize what the most used terms are in criminal cases, what terms are most used in tax cases, and both.
* Tools used: Plotly and Tableau
![screenshot](app/static/img/Allclouds.jpg)

5. Host this information on a webpage
* Page 1: Users can perform the search for documents (using TFIDF scores to sort search terms by relevancy). 
*	Page 2: Display the results of our Naïve Bayes classification model – how well did it do on the training and test data?
*	Page 3: Display word clouds.
*	Tools used: Google App Engine, HTML/CSS/Bootstrap/Javascript

<em>The app was originally deployed to Google App Engine, but taken down due to the maintenance issue. Please download the app package and host the app locally.</em>
