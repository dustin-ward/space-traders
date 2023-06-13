package accounts

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
)

const data_path = "./account_data.json"

func readAccountsFromFile() error {
	data, err := ioutil.ReadFile(data_path)
	if err != nil {
		return err
	}

	if string(data) == "[]" {
		fmt.Println("TEST")
		accounts = make([]Account, 0)
		return nil
	}

	err = json.Unmarshal(data, &accounts)
	if err != nil {
		return err
	}

	return nil
}

func writeAccountsToFile() error {
	data, err := json.MarshalIndent(accounts, "", " ")
	if err != nil {
		return err
	}
	err = ioutil.WriteFile(data_path, data, 0644)
	return err
}
