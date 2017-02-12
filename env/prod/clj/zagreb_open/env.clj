(ns zagreb-open.env
  (:require [clojure.tools.logging :as log]))

(def defaults
  {:init
   (fn []
     (log/info "\n-=[zagreb-open started successfully]=-"))
   :stop
   (fn []
     (log/info "\n-=[zagreb-open has shut down successfully]=-"))
   :middleware identity})
