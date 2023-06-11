package main

import (
	"context"
	"fmt"
	"log"
)

// App struct
type App struct {
	ctx context.Context
	accounts []Account
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

type Account struct {
	Callsign string `json:"callsign"`
	Faction string `json:"faction"`
	Token string `json:"token"`
}

func (a *App) GetAccounts() ([]Account, error) {
	return a.accounts, nil
}

func (a *App) CreateAccount(callsign, faction string) error {
	log.Println("CREATE ACCOUNT:", callsign, faction)
	a.accounts = append(a.accounts, Account{
		Callsign: callsign,
		Faction: faction,
		Token: "TESTTOKEN",
	})
	return nil
}

func (a *App) ResetAllAccounts() {
	log.Println("Resetting all accounts...")
	a.accounts = make([]Account,0)
}

func (a *App) GetFactions() ([]string, error) {
	return []string{
		"FACTION1",
		"FACTION2",
		"FACTION3",
		"FACTION4",
		"FACTION5",
	}, nil
}
