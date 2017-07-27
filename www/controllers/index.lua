local config = require("lapis.config").get()

--[[
FNG Canada Social Insurance Number Generator and Validator v1.1
Copyright © 2009 Fake Name Generator <http://www.fakenamegenerator.com/>

FNG Canada Social Insurance Number Generator and Validator v1.1 by the Fake
Name Generator is licensed to you under a Creative Commons Attribution-Share
Alike 3.0 United States License.

For full license details, please visit:
http://www.fakenamegenerator.com/license.php
--]]
local function generate_sin()
	local valid_prefix = { 1, 2, 3, 4, 5, 6, 7, 9 }
	local prefix       = math.random(#valid_prefix)
	local sin          = tostring(valid_prefix[prefix])
	local length       = 9

	while #sin < length - 1 do
		sin = sin .. tostring(math.random(0, 9))
	end

	local sum = 0
	local pos = 1

	local rsin = ""

	for i=#sin, 1, -1 do
		rsin = rsin .. sin:sub(i, i)
	end

	while pos < length do
		local odd = tonumber(rsin:sub(pos, pos)) * 2

		if odd > 9 then
			odd = odd - 9
		end

		sum = sum + odd

		if pos ~= length - 1 then
			sum = sum + rsin:sub(pos+1, pos+1)
		end

		pos = pos + 2
	end

	local check_digit = ((math.floor(sum / 10) + 1) * 10 - sum) % 10
	sin = sin .. tostring(check_digit)

	return sin
end

return function(self)
	self.page_title = config.site_name
	self.sins       = {}

	for _=1, 75 do
		table.insert(self.sins, generate_sin())
	end

	return { render = "index" }
end
