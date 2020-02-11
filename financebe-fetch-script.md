---
title: Surge script for fetching financebe news
description: 
---

# Surge script for fetching financebe news

m.fbecn.com provides a high quality and wider covering news feed. Use surge on iOS to fetch the feed every minute and post notifications.

# Demand Analysis

1. Reverse API request
2. Build request from Surge
3. Format the output

# Method
1. Reverse API request with chrome. 2 params: 
    - `newsid`: cursor, set to 0 since retreive every minute. 
    - `vs`: timestamp/6000, reversed from js on homepage.
2. Surge API:
    - `$httpClient.get(url, (error, response, data)=>{}`, 
    - `$notification.post(title, subtitle, body)`
    - `$persistentStore.read()/write()` to store last round latest news.
3. Split string with `】` to get title and body, format with `★` if news is important.

# Pitfalls
1. `Date.parse()` and `Date()` implementation is different in every browser, raw date string fetched cannot be parsed in Surge JSVM, but can be handled in chrome. Added `T` between date and time to build ISO-like timestring and to parse correctly.
2. `$persistentStore` only support strings, key is string instead of list of strings. call write func with `write(value, key)`
3. If title too long, iOS notification won't show full content. moved title to body to avoid loss of info.
4. No need to transform CST to UTC, since cannot set notification time, get CST time from substring instead.

# Tricks
1. Array.filter(item=>callback) to filter elements with conditions.
2. Array.map(item=>callback) to deal with each item.