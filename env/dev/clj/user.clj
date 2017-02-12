(ns user
  (:require [mount.core :as mount]
            zagreb-open.core))

(defn start []
  (mount/start-without #'zagreb-open.core/repl-server))

(defn stop []
  (mount/stop-except #'zagreb-open.core/repl-server))

(defn restart []
  (stop)
  (start))


