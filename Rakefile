require 'uri'

def generate_html
  script = `node_modules/.bin/uglifyjs bm.js -cm`

  html = <<EOS
<a href="javascript:#{URI.escape(script.chomp)}">Fill donation form</a>
EOS

  html
end

file "index.html" do
  IO.write "index.html", generate_html
end

task :default => "index.html"
