A Jekyll template for running an open online course (no, not a MOOC)

---

## How do I use it?

- Read about github pages
- Clone the template
- Update _data/course.yml with the relevant info
- Update index.md with the basic info about your course
- Create course contents in _posts/. Have a look at the examples [here](https://github.com/p2pu/course-2-jekyll/tree/gh-pages/_posts).
 - Remeber file names need to start with a date and that this date will determine the order. 
 - Also remember to add the category 'contents' to the post, otherwise it won't show up on your course about page
- Update _config.yml
 - Create a new Google Analytics account and put the site ID in _config.yml
 - Create a new disqus account if you want to enable comments and put the disqus_shortname in _config.yml
- Push to the gh-pages branch of your github reposity
