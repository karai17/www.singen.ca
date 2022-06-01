math.randomseed(os.clock())

local lapis = require "lapis"
local app   = lapis.Application()
app:enable("etlua")
app.layout = require "views.layout"
app:match("/", require "actions.index")

return app
