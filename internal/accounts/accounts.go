package accounts

import (
	"encoding/json"
	"fmt"
	"log"

	"github.com/dustin-ward/space-traders/internal/util"
)

type Account struct {
	Callsign string `json:"callsign"`
	Faction  string `json:"faction"`
	Token    string `json:"token"`
}

var accounts []Account

func GetAccounts() ([]Account, error) {
	err := readAccountsFromFile()
	if err != nil {
		log.Println("GetAccounts:", err)
		return []Account{}, fmt.Errorf("GetAccounts: %v", err)
	}
	return accounts, nil
}

func CreateAccount(callsign, faction string) (string, error) {
	body := fmt.Sprintf(`{"symbol":"%s","faction":"%s"}`,
		callsign,
		faction,
	)

	// TODO: Proper error handling for bad request, duplicate name, etc
	raw_json, err := util.PostRequest("/register", body, "")
	if err != nil {
		log.Println("CreateAccount:", err)
		return "", fmt.Errorf("CreateAccount: %v", err)
	}
	var data any
	if err = json.Unmarshal(raw_json, &data); err != nil {
		log.Println("CreateAccount:", err)
		return "", fmt.Errorf("CreateAccount: %v", err)
	}
	token, ok := data.(map[string]any)["data"].(map[string]any)["token"].(string)
	if !ok {
		log.Println("CreateAccount:", "error casting json")
		return "", fmt.Errorf("CreateAccount: %v", err)
	}

	accounts = append(accounts, Account{
		Callsign: callsign,
		Faction:  faction,
		Token:    token,
	})

	if err := writeAccountsToFile(); err != nil {
		log.Println("CreateAccount:", err)
		return token, fmt.Errorf("CreateAccount: %v", err)
	}

	return token, nil
}

func ResetAllAccounts() error {
	log.Println("Resetting all accounts...")
	accounts = make([]Account, 0)

	if err := writeAccountsToFile(); err != nil {
		log.Println("ResetAllAccounts:", err)
		return fmt.Errorf("ResetAllAcounts: %v", err)
	}

	return nil
}
