'use client';

import { useTranslations } from 'next-intl';
import Button from 'jekoneng-web-ui/components/Button';
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useBook } from '@/providers/BookProvider';
import { locales } from '@/i18n/config';
import { toggleTheme } from '@/actions/theme';
import { useDashboard } from '../hooks';

export const ListOfBooks = ({ locale = 'id', theme = 'light' }) => {
  const t = useTranslations('HomePage');

  const book = useBook();

  const dashboard = useDashboard();

  return (
    <div className="flex flex-col gap-1 items-start">
      <Stack direction="column" spacing={2}>
        <Button
          variant="primary"
          label={`Theme ${theme}`}
          onClick={() => toggleTheme()}
        />
        <Button
          variant="primary"
          label={`Call Function on ${t('title')}`}
          onClick={dashboard.callFunction}
        />
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-helper-label">Locale</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={locale}
            label="Locale"
            onChange={dashboard.handleChange}
          >
            {locales.map((locale) => (
              <MenuItem value={locale} key={locale}>
                {locale}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Stack direction="row" spacing={2}>
          <Button
            variant="primary"
            label={`${t('save')} ${t('book')} ${t('storage')}`}
            disabled={book.items.length === 0}
            onClick={() => book.saveBook()}
          />
          <Button
            variant="danger"
            label={`${t('clear')} ${t('storage')}`}
            disabled={book.items.length === 0}
            color="error"
            onClick={() => book.clearBook(true)}
          />
          <Button
            variant="danger"
            label={`${t('clear')} ${t('book')}`}
            disabled={book.items.length === 0}
            onClick={() => book.clearBook()}
          />
          <Button
            variant="primary"
            label={`${t('get')} ${t('book')}`}
            color="secondary"
            onClick={() => book.getBook()}
          />
          <Button
            variant="primary"
            label={book.isLoading ? 'Loading...' : `${t('fetch')} ${t('book')}`}
            onClick={() => book.fetchBook()}
          />
        </Stack>
      </Stack>
      <div>
        {book.items.map((item, index) => (
          <div key={index}>
            <h1>{item.Title}</h1>
            <p>{item.Publisher}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
