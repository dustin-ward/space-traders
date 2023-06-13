package app

import (
	"context"
	"fmt"

	"github.com/dustin-ward/space-traders/internal/accounts"
)

const API_LINK = "https://api.spacetraders.io/v2"

// App struct
type App struct {
	ctx context.Context
	accounts []accounts.Account
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

// Greet returns a greeting for the given name
func (a *App) Greet(name string) string {
	return fmt.Sprintf("Hello %s, It's show time!", name)
}
