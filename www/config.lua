local config = require "lapis.config"

-- Maximum file size
local body_size = "1m"

-- Path to your lua libraries (LuaRocks and OpenResty)
local lua_path  = "/root/.luarocks/share/lua/5.1/?.lua;/root/.luarocks/share/lua/5.1/?/init.lua;/usr/share/lua/5.1/?.lua;/usr/share/lua/5.1/?/init.lua;./?.lua;/usr/share/luajit-2.0.4/?.lua;/usr/local/share/lua/5.1/?.lua;/usr/local/share/lua/5.1/?/init.lua" .. ";./extern/?.lua;./extern/?/init.lua"
local lua_cpath = "/root/.luarocks/lib/lua/5.1/?.so;/usr/lib/lua/5.1/?.so;./?.so;/usr/local/lib/lua/5.1/?.so;/usr/lib64/lua/5.1/?.so;/usr/local/lib/lua/5.1/loadall.so" .. ";/usr/lib/?.so;/usr/lib64/?.so"

config("devel", {
	site_name = "[DEVEL] Canadian SINs",
	port      = 2808,
	body_size = body_size,
	lua_path  = lua_path,
	lua_cpath = lua_cpath
})

config("prod", {
	code_cache = "on",
	site_name  = "Canadian SINs",
	port       = 2808,
	body_size  = body_size,
	lua_path   = lua_path,
	lua_cpath  = lua_cpath
})
