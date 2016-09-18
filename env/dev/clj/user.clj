(ns user
  (:require [mount.core :as mount]
            bjelovar-open.core))

(defn start []
  (mount/start-without #'bjelovar-open.core/repl-server))

(defn stop []
  (mount/stop-except #'bjelovar-open.core/repl-server))

(defn restart []
  (stop)
  (start))


