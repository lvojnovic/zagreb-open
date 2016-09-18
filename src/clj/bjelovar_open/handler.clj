(ns bjelovar-open.handler
  (:require [compojure.core :refer [routes wrap-routes]]
            [bjelovar-open.layout :refer [error-page]]
            [bjelovar-open.routes.home :refer [home-routes]]
            [bjelovar-open.routes.services :refer [service-routes]]
            [compojure.route :as route]
            [bjelovar-open.env :refer [defaults]]
            [mount.core :as mount]
            [bjelovar-open.middleware :as middleware]))

(mount/defstate init-app
                :start ((or (:init defaults) identity))
                :stop  ((or (:stop defaults) identity)))

(def app-routes
  (routes
    (-> #'home-routes
        (wrap-routes middleware/wrap-formats))
    #'service-routes
    (route/not-found
      (:body
        (error-page {:status 404
                     :title "page not found"})))))


(defn app [] (middleware/wrap-base #'app-routes))
