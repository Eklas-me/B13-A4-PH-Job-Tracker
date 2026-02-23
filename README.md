## Answers to Questions

# 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

	getElementByI: HTML এ কোনো আইডি id দিয়ে নির্দিষ্ট একটা এলিমেন্টকে ধরার জন্য এটা ব্যবহার করা হয়।
	getElementsByClassName: কোনো নির্দিষ্ট ক্লাস class এর সব এলিমেন্টকে একসাথে ধরার জন্য এটা ব্যবহার করা হয়।
	querySelector: CSS এর মতো করে যেমন #id, .class প্রথম যে এলিমেন্টটার সাথে মিলবে, শুধু তাকে ধরার জন্য এটা লাগে।
	querySelectorAll: CSS এর নিয়মে যতগুলো এলিমেন্টের সাথে মিলবে, তার সবগুলোকে একসাথে ধরার জন্য এটা ব্যবহার করা হয়।



# 2. How do you create and insert a new element into the DOM?

	নতুন এলিমেন্ট তৈরি করে যোগ করতে দুইটা কাজ করতে হয়:
	তৈরি করা: document.createElement('tag-name') দিয়ে নতুন এলিমেন্ট বানাতে হয়। (যেমন: document.createElement('div'))
	যোগ করা: এরপর appendChild() বা append() দিয়ে সেটাকে HTML এর কোথাও যুক্ত করে দিতে হয়।



# 3. What is Event Bubbling? And how does it work?

	কোনো ভেতরের (child) এলিমেন্টে ক্লিক করলে, সেই ক্লিকটা শুধু তার মধ্যেই থাকে না, বরং পানির বুদবুদের মতো তার বাইরের (parent) এলিমেন্টগুলোতেও ছড়িয়ে পড়ে। একেই ইভেন্ট বাবলিং বলে।
	যেমন: button এর ভিতরে click করলে, আগে button এর event চলবে, তারপর div, তারপর body পর্যন্ত যাবে।



# 4. What is Event Delegation in JavaScript? Why is it useful?

	অনেকগুলো ছট ছোট চাইল্ড এলিমেন্টে আলাদা আলাদা ক্লিক ইভেন্ট না দিয়ে, তাদের মেইন বা প্যারেন্ট এলিমেন্টে একটা ইভেন্ট লিসেনার দিয়ে রাখাই হলো Event Delegation। এতে অনেকগুলো ইভেন্ট লিসেনার লিখতে হয় না, তাই কোড পরিষ্কার থাকে।



# 5. What is the difference between preventDefault() and stopPropagation() methods?

	preventDefault(): ব্রাউজারের ডিফল্ট কাজ থামানোর জন্য এটা লাগে। যেমন: ফর্ম সাবমিট করলে যেন পেজ রিলোড না হয়।
	stopPropagation(): ইভেন্ট বাবলিং থামানোর জন্য এটা ব্যবহার করা হয়।
