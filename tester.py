import tweepy


consumer_key = '5qQHILVWzVhnyQ1th0zh60PyH'
consumer_secret = 'JkS3UfaWIDVIgGbYH5wz9K21dKa6wIhC9qeahUB0qVGNTO31wU'
access_token = '1371668314183892998-raTq0eYTo1xn26R6nOv6kxJu7heprU'
access_token_secret = '4JPBQVi0j01G2uKpJ79cN3XEAsEceTzPjVldER7dUwW0i'



auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_token_secret)


api = tweepy.API(auth,wait_on_rate_limit=True,wait_on_rate_limit_notify=True)


for tweets in api.search(q="Arsenal", lang="en"):
    print((tweets.text).encode("utf-8"))