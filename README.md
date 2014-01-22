For the moment this is just an experiment

---

My thoughts on the experiment:

## layout
 
Using the templating system for layout is a little awkward when things are more complex than a post with some meta data and content. Things like a course with a lot of people subscribed to the course, multiple pages associated with the course and multiple comments made on the course.

It is possible though by using (or abusing, I don't know) the front matter. Since the front matter is just YAML, all course data can be put in there, this includes signups, comments, metadata, etc.

## using it for archiving

We can do this, although I'm sceptic of the value that we can by exporting it as jekyll pages rather than static HTML. The benefit of the static HTML will be that we retain the look. The benefit of the jekyll version would be that we get the meat of courses (content, comments, etc) in a juicier format. We can always export static HTML and export courses to some format like YAML or JSON.

## using it for new courses

This may fit. We can create a basic skeleton project that people can clone to create courses. Creating the course would require them modify the config file, (maybe create a disqus account beforehand), tweak layout if they want and then add course content in markdown, textile or html format. I think they will manually need to add pages to their course, I don't know if jekyll allows you to get a list of files in a directory or better, the front matter, etc...
