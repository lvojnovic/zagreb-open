(ns bjelovar-open.env
  (:require [clojure.tools.logging :as log]))

(def defaults
  {:init
   (fn []
     (log/info "\n-=[bjelovar-open started successfully]=-"))
   :stop
   (fn []
     (log/info "\n-=[bjelovar-open has shut down successfully]=-"))
   :middleware identity})
