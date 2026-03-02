import os
import re

pattern = re.compile(r'<img([^>]*?)src="([^"]+)-900\.webp"([^>]*)alt="([^"]*)"([^>]*)>', re.IGNORECASE)

def repl(m):
    path = m.group(2)
    alt = m.group(4)
    return f'''<picture>
  <source media="(max-width: 640px)" srcset="{path}-480.webp">
  <source media="(max-width: 1024px)" srcset="{path}-900.webp">
  <img src="{path}-900.webp" alt="{alt}" width="900" height="600" loading="lazy">
</picture>'''

for root, dirs, files in os.walk("."):
    for file in files:
        if file.endswith(".html"):
            p = os.path.join(root, file)
            with open(p, "r", encoding="utf-8") as f:
                content = f.read()
            new = pattern.sub(repl, content)
            with open(p, "w", encoding="utf-8") as f:
                f.write(new)

print("DONE")
