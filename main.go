package main

import (
	"embed"

	"github.com/wailsapp/wails/v2"
	"github.com/wailsapp/wails/v2/pkg/options"
	"github.com/wailsapp/wails/v2/pkg/options/assetserver"

	"github.com/dustin-ward/space-traders/internal/app"
	// _ "github.com/dustin-ward/space-traders/internal/accounts"
	// _ "github.com/dustin-ward/space-traders/internal/factions"
)

// 'wails dev' should properly launch vite to serve the site
// for live development without needing to seperately launch
// 'npm run dev' or your flavor such as pnpm in the frontend
// directory seperately.

// The comment below chooses what gets packaged with
// the application.

//go:embed all:frontend/build
var assets embed.FS

func main() {
	// Create an instance of the app structure
	st_app := app.NewApp()

	// Create application with options
	err := wails.Run(&options.App{
		Title:  "SpaceTraders",
		Width:  1024,
		Height: 768,
		AssetServer: &assetserver.Options{
			Assets: assets,
		},
		BackgroundColour: &options.RGBA{R: 27, G: 38, B: 54, A: 1},
		OnStartup:        st_app.Startup,
		Bind: []interface{}{
			st_app,
		},
	})

	if err != nil {
		println("Error:", err.Error())
	}
}
