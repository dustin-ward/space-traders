package main

import (
	"context"
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
)

const API_LINK = "https://api.spacetraders.io/v2"

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
	Faction Faction `json:"faction"`
	Token string `json:"token"`
}

func (a *App) GetAccounts() ([]Account, error) {
	return a.accounts, nil
}

func (a *App) CreateAccount(callsign string, faction Faction) error {
	log.Println("CREATE ACCOUNT:", callsign, faction.Symbol)
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

type Faction struct {
	Symbol string `json:"symbol"`
	Name string	`json:"name"`
	Description string `json:"description"`
	Headquarters string	`json:"headquarters"`
	// TODO: Implement traits
	// Traits []Traits
	IsRecruiting bool `json:"isRecruiting"`
}
func (a *App) GetFactions() ([]Faction, error) {
	factions := make([]Faction,0)
	
	// TODO: Deal with pagination when #factions > 20
	resp, err := http.Get(API_LINK + "/factions?limit=20")
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return nil, err
	}

	var data any
	err = json.Unmarshal(body, &data)
	if err != nil {
		return nil, err
	}

	data_arr := data.(map[string]any)["data"].([]any)
	for _, f := range data_arr {
		faction := f.(map[string]any)
		factions = append(factions, Faction{
			Symbol: faction["symbol"].(string),
			Name: faction["name"].(string),
			Description: faction["description"].(string),
			Headquarters: faction["headquarters"].(string),
			IsRecruiting: faction["isRecruiting"].(bool),
		})
	}

	return factions, nil
}
