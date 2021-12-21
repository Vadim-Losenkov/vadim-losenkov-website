import sys
import time
import logging
from watchdog.observers import Observer
from watchdog.events import LoggingEventHandler, FileSystemEventHandler
import os
import subprocess


class ChangeHandler(FileSystemEventHandler):
    def on_any_event(self, event):
        pass
    def on_created(self, event):
        pass
      
    def on_modified(self, event):
        if event.is_directory==True:
          
          if event.src_path=='./app/scss':
            print(event)
            # list_files = subprocess.run(["sass", "app/scss/style.scss", "app/css/style.min.css", "--style", "compressed"])
            # list_files = subprocess.run(["sass", "app/scss/reviews.scss", "app/css/reviews.min.css", "--style", "compressed"])
            list_files = subprocess.run(["sass", "app/scss/portfolio.scss", "app/css/portfolio.min.css", "--style", "compressed"])
            # list_files = subprocess.run(["sass", "app/scss/about.scss", "app/css/about.min.css", "--style", "compressed"])
            # list_files = subprocess.run(["sass", "app/scss/social.scss", "app/css/social.min.css", "--style", "compressed"])

    def on_deleted(self, event):
        pass

    def on_moved(self, event):
        pass

if __name__ == "__main__":
    path = sys.argv[1] if len(sys.argv) > 1 else '.'
    observer = Observer()
    observer.schedule(ChangeHandler(), path, recursive=True)
    observer.start()
    
    try:
        while True:
            time.sleep(0.1)
    except KeyboardInterrupt:
        observer.stop()
    observer.join()
